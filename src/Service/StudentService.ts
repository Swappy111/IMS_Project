import axios from "axios";
import { IRegis } from "../Interfaces/IRegis";
import { ILogin } from "../Interfaces/ILogin";

export class StudentService{
    static getUser(username: any) {
        throw new Error("Method not implemented.");
    }
    private static ServerUrl='http://localhost:3001';

    public static Registration=(RegisDetails:IRegis):Promise<{data:any}> =>{
        const dataUrl=`${this.ServerUrl}/ims/registration`;
        return axios.post(dataUrl,RegisDetails)
    };

    public static Login=(LoginDetails:ILogin):Promise<{data:any}>=>{
        const dataUrl=`${this.ServerUrl}/ims/login`;
        return axios.post(dataUrl,LoginDetails)
    };

    public static getJavascriptTestQuestions = () => {
        const dataUrl = `${this.ServerUrl}/ims/javascript`;
        return axios.get(dataUrl);
      };
    
      public static getReactTestQuestions = () => {
        const dataUrl = `${this.ServerUrl}/ims/react`;
        return axios.get(dataUrl);
      };
    
      public static getHtmlTestQuestions = () => {
        const dataUrl = `${this.ServerUrl}/ims/html`;
        return axios.get(dataUrl);
      };
    
      public static getCssTestQuestions = () => {
        const dataUrl = `${this.ServerUrl}/ims/css`;
        return axios.get(dataUrl);
      };



      public static postUserOnPointsTable = (userPointDetails: any) => {
        const dataUrl = `${this.ServerUrl}/ims/postpoints`;
        return axios.post(dataUrl, userPointDetails);
      };
    
      public static getUsersPoint = (username: any) => {
        const dataUrl = `${this.ServerUrl}/ims/userpoint`;
        return axios.get(dataUrl, { params: { username: username } });
      };
    
      public static updateTestPoints = (updatepoint: any) => {
        const dataUrl = `${this.ServerUrl}/ims/updatepoint`;
        return axios.put(dataUrl, updatepoint);
      };
}

