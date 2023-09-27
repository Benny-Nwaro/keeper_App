

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user_data"))

  if (user && user.token) {
    return { "auth-token": user.token };
  } else {
    return {};
  }
}
