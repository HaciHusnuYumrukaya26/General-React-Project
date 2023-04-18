import React ,{useRef} from 'react'

import styles from "./styles.module.css";

function IncomeForm({income,setIncome}) {

    const desc = useRef(null)
    const date = useRef(null)
    const price = useRef(null)

    const AddIncome = e => {
        e.preventDefault();
        // let d = date.current.value.split("-");
        // let newD = new Date(d[0],d[1],d[2]);

        setIncome([...income , {
            id: Math.floor(Math.random()*1000),
            "desc" : desc.current.value,
            "price": price.current.value,
            "date" : date.current.value
        }]);

        desc.current.value = "";
        price.current.value = "";
        date.current.value = "";

    }


  return (
    <form className={styles["income-form"]} onSubmit={AddIncome}>
            <div className={styles["form-inner"]}>
                <input type="text"  name='desc' id='desc' placeholder='Income Description...' ref={desc}/>
                <input type="number"  name='price' id='price' placeholder='Price...' ref={price} />
                <input type="date"  name='date' id='date' placeholder='Income Date...' ref={date}/>
                <input className='btn btn-secondary' type="submit" value="Add Income" />
            </div>
    </form>
  )
}

export default IncomeForm