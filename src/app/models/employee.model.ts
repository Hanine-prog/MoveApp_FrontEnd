import { Deplacement } from "./deplacement.model";

export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  grade: string;
  matricule: string;
  email: string;
  image: string;
  deplacements?: Deplacement[];
}
