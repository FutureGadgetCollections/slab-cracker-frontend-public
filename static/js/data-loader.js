async function loadFromGitHub(filename) {
  const repo = window.DATA_CONFIG.githubDataRepo;
  if (!repo) throw new Error('GitHub data repo not configured');
  const url = `https://raw.githubusercontent.com/${repo}/main/${filename}?t=${Date.now()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GitHub fetch failed: ${res.status}`);
  return res.json();
}

async function loadFromGCS(filename) {
  const bucket = window.DATA_CONFIG.gcsBucket;
  if (!bucket) throw new Error('GCS bucket not configured');
  const url = `https://storage.googleapis.com/${bucket}/${filename}?t=${Date.now()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GCS fetch failed: ${res.status}`);
  return res.json();
}

async function loadJsonData(filename) {
  try {
    return await loadFromGitHub(filename);
  } catch {
    return await loadFromGCS(filename);
  }
}
