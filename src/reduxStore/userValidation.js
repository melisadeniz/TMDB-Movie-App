import init_user from "../data/init_user.json";

const VALIDATE_USER = "VALIDATE_USER";
const LOGOUT_USER = "LOGOUT_USER"

//ACTION
export const validateUser = (username, password) => ({
  type: VALIDATE_USER,
  payload: { username, password },
});

export const userLogout = () => ({
  type: LOGOUT_USER
})

//REDUCER
export const userReducer = (user, action) => {
  init_user.forEach((value) => {
    user = value;
  });
  localStorage.setItem("user", user);
  switch (action.type) {
    case VALIDATE_USER:
      return action.payload.username === user.username &&
        action.payload.password === user.password
        ? { ...user, userLogin: true }
        : { ...user, userLogin: false }

        case LOGOUT_USER:
            return init_user
    default:
      return user;
  }
};

