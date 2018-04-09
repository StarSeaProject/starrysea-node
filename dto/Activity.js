class Activity{
    static resolveFromReq(req){
        let activity=new Activity();
        return activity;
    }
    setActivityId(id){
        this.id=id;
    }
}
module.exports=Activity;