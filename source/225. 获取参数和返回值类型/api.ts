interface LoginOptions {}

interface LoginResponse {}

export async function login(
  options: LoginOptions,
  remember: boolean
): Promise<LoginResponse> {
  return 1 as LoginOptions;
}
