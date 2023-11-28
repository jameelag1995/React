import DATA from "../../data/data";
import Card from "./Card";
import Name from "./Name";
import './datamsg.css'
export default function DataMassaging() {
    console.log(DATA);
    const namesArr = () => {
        return DATA.map((person) => person.name);
    };

    console.log(namesArr);
    const bornBeforeNinety = () => {
       return DATA.filter((person) => person.birthday.split("-")[2] < 1990);
    };
    console.log(bornBeforeNinety);
    return (
        <>
        <h1>Names</h1>
            <div className="names-container">
                {namesArr().map((personName, index) => (
                    <Name key={index} personName={personName} />
                ))}
            </div>
            <h1>People Born Before 1990</h1>
            <div className="cards-container">
                {bornBeforeNinety().map((person, index) => (
                    <Card key={index} person={person} />
                ))}
            </div>
        </>
    );
}
