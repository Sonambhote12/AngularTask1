export class User {
    constructor(
        public slug: string, 
        public user_name: string, 
        public password:string, 
        private _token: string, 
        private _tokenExpirationDate: Date) {}


        get token(){
            if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
                return null
            }
            return this._token;
        }
}