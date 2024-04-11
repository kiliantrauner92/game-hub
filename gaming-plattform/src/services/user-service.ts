import apiClient from "./api-client";

export interface User {
    id: number;
    name: string;
}

class UserService {
    getAllUsers() {
        const controller = new AbortController();
        const request = apiClient
        .get<User[]>("/users", {
          signal: controller.signal,
        })
        return {request, cancel: () => controller.abort()}
    }

    createUser(user: User){
        return apiClient.post(apiClient + "/users/", user)
    }

    updateUser(user: User){
        return apiClient.patch(apiClient + "/users/" + user.id, user)
    }
    
    deleteUser(id: number){
        return apiClient.delete(apiClient + "/users/" + id)
    }
}

export default new UserService();
