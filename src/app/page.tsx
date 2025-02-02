'use client';
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {

  async function strongestNumber(e: any){
    e.preventDefault();

    const data = {
      Numbers: (e.target.numbers.value)
    }
    data.Numbers = data.Numbers.split(",")
    let counts = 0
    let countsSaved = 0
    let number = 0
    let validate = 0
    let n = data.Numbers[0]
    let m = data.Numbers[1]
      
    do {
      let checkN = n
      while (checkN > 0 && !(checkN & 1)){
        checkN >>=1
        counts++
        countsSaved = counts
      }

      if (countsSaved >= validate) {
        validate = countsSaved
        if(n % 2 == 0){
          number = n
        }
      }
      
      counts = 0
      countsSaved = 0
      n++
        
    } while (n <= m);
  
    console.log(number) 
}

  return (
      <form onSubmit={strongestNumber} className="container col-6 text-center mt-4 bg-light">
        <div>
            <div className="d-flex justify-content-center form-group">
                <div className="form-group col-5 px-md-4 mb-3">
                    <label>Gloves</label>
                    <input type="text" className="form-control" id="numbers" required aria-describedby="emailHelp " />
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mx-auto d-block">Send Recipe</button>
        </div>
    </form>
  );
}
