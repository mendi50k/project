export const getUser = () => {
  const savedUser = localStorage.getItem("user");
  return savedUser ? JSON.parse(savedUser) : null;
};

export const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const clearUser = () => {
  localStorage.removeItem("user");
};
