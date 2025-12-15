import { Component } from "react";
import { Api } from "./Api";

class RoutesLists extends Component {
    
    async getAgeGroups() {
        return Api.get("/agegroup/list");
    }

    async getServices(data) {
        return Api.get(`/service/list?age=${data}`);
    }
    async getFeaturedServices() {
        return Api.get(`/service/featured/list`);
    }

    async getServiceDetail(pid) {
        return Api.get(`/service/${pid}`);
    }

    async getServicesByAge({pid}) {
        return Api.get(`/service/list/${pid}`);
    }

    async getGroupData({pid}) {
        return Api.get(`/agegroup/${pid}`);
    }

    async getEnquiry(data){
        return Api.post("/contact",data);
    }

    async deleteagegroup(pid){
        return Api.get(`/agegroup/delete/${pid}`);
    }

    async getEvents(){
        return Api.get('/event/list');
    }
    async getResources(){
        return Api.get('/resource/list');
    }
    async getWaitList(){
        return Api.get('/waitlist/list');
    }
    async getTeamMembers(){
        return Api.get('/team/list');
    }
    async singleSubServiceDetail(pid) {
        return Api.get(`/subservice/${pid}`);
    }
    async getCategoryDetail(pid) {
        return Api.get(`/categoryDetails/${pid}`);
    }
    render() {
        return (
            <div>
                <></>
            </div>
        );
    }
}

export default RoutesLists;