import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Deplacement } from "../models/deplacement.model";

@Injectable({
  providedIn: "root",
})
export class DeplacementService {
  private apiServerUrl = environment.apiBaseUrlDeplacement;

  constructor(private http: HttpClient) {}

  public getDeplacements(): Observable<Deplacement[]> {
    return this.http.get<Deplacement[]>(`${this.apiServerUrl}/deplacement`);
  }

  public addDeplacements(deplacement: Deplacement): Observable<Deplacement> {
    return this.http.post<Deplacement>(
      `${this.apiServerUrl}/deplacement`,
      deplacement
    );
    console.log(deplacement);
  }
  public updateDeplacements(
    deplacement: Deplacement,
    deplacementId: number
  ): Observable<Deplacement> {
    return this.http.put<Deplacement>(
      `${this.apiServerUrl}/deplacement/${deplacementId}`,
      deplacement
    );
  }

  public deleteDeplacements(deplacementId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/deplacement/${deplacementId}`
    );
  }
}
