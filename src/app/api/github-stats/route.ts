import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  if (!token) {
    return NextResponse.json({ error: 'GitHub token not found.' }, { status: 500 });
  }

  try {
    // Fetch public user info
    const userRes = await fetch('https://api.github.com/users/Niteshagarwal01', {
      headers: {
        Authorization: `token ${token}`,
        'User-Agent': 'myportfolio-app'
      }
    });
    const userData = await userRes.json();

    // Fetch public repos for PRs and issues count
    const reposRes = await fetch('https://api.github.com/users/Niteshagarwal01/repos?per_page=100', {
      headers: {
        Authorization: `token ${token}`,
        'User-Agent': 'myportfolio-app'
      }
    });
    const reposData = await reposRes.json();

    // Aggregate PRs and issues
    let totalPRs = 0;
    let totalIssues = 0;
    reposData.forEach((repo: any) => {
      totalPRs += repo.open_pull_requests_count || 0;
      totalIssues += repo.open_issues_count || 0;
    });

    return NextResponse.json({
      stars: userData.public_repos,
      commits: userData.public_gists, // GitHub API does not provide commit count directly
      totalPRs,
      totalIssues,
      avatar: userData.avatar_url,
      name: userData.name,
      error: null
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch GitHub data.' }, { status: 500 });
  }
}
