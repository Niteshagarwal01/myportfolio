import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  if (!token) {
    return NextResponse.json({ error: 'GitHub token not found.' }, { status: 500 });
  }

  // GraphQL query for contributions
  const graphQLQuery = {
    query: `
      {
        user(login: "Niteshagarwal01") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    `
  };

  try {
    // Fetch contributions from GraphQL
    const graphRes = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(graphQLQuery)
    });
    const graphJson = await graphRes.json();
    const totalContributions = graphJson.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions ?? null;

    // Fetch user info from REST
    const userRes = await fetch('https://api.github.com/users/Niteshagarwal01', {
      headers: {
        Authorization: `token ${token}`,
        'User-Agent': 'myportfolio-app'
      }
    });
    const userData = await userRes.json();

    // Fetch repos for PRs and issues
    const reposRes = await fetch('https://api.github.com/users/Niteshagarwal01/repos?per_page=100', {
      headers: {
        Authorization: `token ${token}`,
        'User-Agent': 'myportfolio-app'
      }
    });
    const reposData = await reposRes.json();
    let totalPRs = 0;
    let totalIssues = 0;
    reposData.forEach((repo: any) => {
      totalPRs += repo.open_pull_requests_count || 0;
      totalIssues += repo.open_issues_count || 0;
    });

    return NextResponse.json({
      stars: userData.public_repos,
      commits: userData.public_gists, // REST API does not provide commit count directly
      totalPRs,
      totalIssues,
      totalContributions,
      avatar: userData.avatar_url,
      name: userData.name,
      error: null
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch GitHub stats.' }, { status: 500 });
  }
}
