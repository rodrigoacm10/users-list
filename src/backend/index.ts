import DeleteUser from "./user/DeleteUser";
import GetAll from "./user/GetAll";
import SaveUser from "./user/SaveUser";

// padrão facade
export default class Backend {
  static readonly users = {
    GetAll,
    SaveUser,
    DeleteUser,
  };
}
