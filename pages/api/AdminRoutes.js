import { Component } from "react";
import { Api } from "./Api";

class AdminRoutes extends Component {
    
    async adminlogin(data) {
        return Api.post("/admin/login",data);
    }
    async adminprofile(data) {
        return Api.get("/admin/myprofile",data);
    }
    async addagegroup(data) {
        return Api.post("/agegroup/add",data);
    }
    async addservice(data) {
        return Api.post("/service/add",data);
    }
    async getcontactlist() {
        return Api.get("/contact/list");
    }

    render() {
        return (
            <div>
                <></>
            </div>
        );
    }
}

export default AdminRoutes;