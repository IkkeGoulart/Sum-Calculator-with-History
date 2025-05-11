export default function Record({recordList}) {

    console.log(recordList)
    return (
        <div>
            <h1>Histórico</h1>

            {recordList.map( (record, i) => <p key={i}>{record.firstValue}+{record.secondValue}={record.result}</p>)}
        </div>
    );
}