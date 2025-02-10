const VALID_EMPLOYEE = { username: "mendi", password: "50K", role: "employee" };

export const loginEmployee = (username, password) => {
  if (username === VALID_EMPLOYEE.username && password === VALID_EMPLOYEE.password) {
    localStorage.setItem("user", JSON.stringify(VALID_EMPLOYEE));
    return VALID_EMPLOYEE;
  }
  return null;
};

export const logoutEmployee = () => {
  localStorage.removeItem("user");
};
