class User {
    public name : string;
    public email: string; 
    public password : number;
    public user_name :string;
    constructor(name:string , email:string , password:number , user_name:string){
        this.name = name;
        this.email = email;
        this.password = password;
        this.user_name = user_name;
    }
}
export default User;
