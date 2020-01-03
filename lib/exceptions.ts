export function IDException(ID:string,reason:string,message:string) {
    this.ID = ID;
    this.reason = reason;
    this.message = message;
}

export function RelationshipException(ID:string,reason:string,message:string) {
    this.ID = ID;
    this.reason = reason;
    this.message = message;
}

export function NoConnectionException(ID:string,reason:string,message:string){
    this.ID = ID;
    this.reason = reason;
    this.message = message;
}
export function ScoochException(ID:string,reason:string,message:string){
    this.ID = ID;
    this.reason = reason;
    this.message = message;
}