import { Component } from "react";
import { Api } from "./Api";

class RoutesLists extends Component {
    
    async getAgeGroups() {
        return Api.get("/agegroup/list");
    }

    async getServices() {
        return Api.get("/service/list");
    }

    async getServiceDetail({pid}) {
        return Api.get(`/service/${pid}`);
    }

    async getServicesByAge({pid}) {
        return Api.get(`/service/list/${pid}`);
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