import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../model/User";

@Injectable()
export class UserService {
    private apiServiceUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){ }

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.apiServiceUrl}/user/all`)
    }

    public addUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.apiServiceUrl}/user/add`, user)
    }

    public updateUser(user: User): Observable<User> {
        return this.http.put<User>(`${this.apiServiceUrl}/user/update`, user)
    }

    public deleteUser(userId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServiceUrl}/user/delete/${userId}`)
    }
}