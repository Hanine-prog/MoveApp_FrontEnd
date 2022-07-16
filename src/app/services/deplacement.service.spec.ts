import { TestBed } from "@angular/core/testing";
import { DeplacementService } from "./deplacement.service";

describe("deplacementService", () => {
  let service: DeplacementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeplacementService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
