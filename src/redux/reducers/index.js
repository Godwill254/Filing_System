import { combineReducers} from "redux";
import authReducer from "./authReducer";
import fileFoldersReducer from "./fileFoldersReducers";


const rootReducer = combineReducers({
    auth : authReducer, 
    filefolders: fileFoldersReducer,
});
export default rootReducer;