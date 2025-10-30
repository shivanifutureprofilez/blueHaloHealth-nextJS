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
    async updateService(id,data) {
        return Api.post(`/service/update/${id}`,data);
    }
    async getcontactlist() {
        return Api.get("/contact/list");
    }
    async deleteService(data) {
        return Api.get(`/service/delete/${data}`);
    }
    async featureService(id) {
        return Api.get(`/service/mark/featured/${id}`);
    }
    async getServiceById(data) {
        return Api.get(`/service/list/${data}`);
    }   
    async editAge(data){
        return Api.post(`/agegroup/update`,data);
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