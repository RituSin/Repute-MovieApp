
import './table.css';

const Table = (props) => {
    return(
    <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-2">Title</div>
          <div className="col col-3">Original Langugae</div>
          <div className="col col-3">Vote Average</div>
        </li>
        <din className="table-container">
        {
            props.data && props.data.map(item => (
              <li className="table-row tooltip" key={item.id}>
                <div className="col col-2" data-label="Job Id">
                    {item.original_title}
                </div>
                <div className="col col-3" data-label="Customer Name">{item.original_language}</div>
                <div className="col col-3" data-label="Amount">{item.vote_average}</div>
                <span className='tooltiptext'>
                    About - {item.overview} <br/><br/>
                    Popularity - {item.popularity} <br/><br/>
                    Release date: {item.release_date}
                </span>
              </li>
            ))
        }  
        </din>
            
        
      </ul>
   
)
}

export default Table;