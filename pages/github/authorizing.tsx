import { useGithubAuthRedirect } from 'react-tinacms-github';

export default function Authorizing() {
  // Let the main app know, that we received an auth code from the GitHub redirect
  useGithubAuthRedirect();

  return <h2>Authorizing with GitHub, please wait...</h2>;
}
