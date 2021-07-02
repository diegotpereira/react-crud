import http from "../http-common";

class TutorialDataService {
    getAll() {
        return http.get("/tutorials");
    }

    get(id) {
        return http.get('/tutorials/${id}');
    }

    create(data) {
        return http.post("/tutorials", data);
    }

    update(id, data){
        return http.put('/tutorials/${id}');
    }

    delete(id) {
        return http.delete('/tutorials/${id}');
    }

    deleteAll(){
        return http.delete('/tutorials');
    }

    findByTitle(titulo) {
        return http.get('/tutorials?titulo=${titulo}');
    }
}

export default new TutorialDataService();