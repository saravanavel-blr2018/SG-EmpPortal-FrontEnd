import { Employee } from '../model/Employee';
import { HttpclientService } from './httpclient.service';


describe('HttpclientService', () => {
  //let httpClient : HttpClient;
  let httpClientSpy: { get: jasmine.Spy };
  let httpService:HttpclientService;
  /*beforeEach(
    () => TestBed.configureTestingModule(
    {})    
    );
  */

  beforeEach(()=>{
    //httpService = new HttpclientService(new HttpClient(null));
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpService = new HttpclientService(<any> httpClientSpy);
  });
  
  xit('should be created', () => {
    //const service: HttpclientService = new HttpclientService(new HttpClient(null));
    //expect(httpService).toBeTruthy();
  });

  xit('should get all the employees from H2 database', () => {
    const employees  = httpService.getEmployees();
    console.log("Employees:::"+employees);
    console.log("Employees count:::"+employees.pipe.length);
    //expect(employees.pipe.length).toBeGreaterThanOrEqual(0);
    expect(employees).toBeTruthy();
  });


  it('should get all the employees from H2 database', () => {
    const expectedEmployees: Employee[] =
    [
      { "id": 1, "fname": "A","lname":"A","department":"XYZ","gender":"Male","dob":"2010-10-10"}
    ];
  httpClientSpy.get.and.returnValue(expectedEmployees);

  
  const empList  = httpService.getEmployees().subscribe(
    (data)=> {
      expect(data.length).toBeGreaterThan(1);
      expect(data[0].id).toBe(0);
    }
  );

  console.log("Emp List:"+empList);

  });

});
