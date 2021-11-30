import React,{ChangeEvent, useState} from 'react';
import {Navbar} from '../components/Navbar';
import '../css/Prs.css';
import { PrItemsList } from '../components/PrItemsList';
import sortBy from 'lodash.sortby';
import { AddPr } from '../hooks/AddPr';
import { UpdatePr } from '../hooks/UpdatePr';
import { BiCaretDownCircle } from "react-icons/bi";

let IdIterator = -1;

export const  Prs : React.FC = () =>{

    const [initialPrs,setInitialPrs] = useState<Array<PR>>([])
    const [prToBeUpdated,setPrToBeUpdated] = useState<PR>(
        {
            Date:new Date(),
            date:"",
            SE:"",
            Platform: "",
            Version: "",
            Comment: "",
            PR: "",
            Size : "",
            Difficulty : "",
            Status : "",
            BYStatus: "",
            AHStatus: "",
            HTStatus : ""
        }
    );

    const [updateProgress,setUpdateProgress] = useState<boolean>(false);
    const [prs,setPrs] = useState<Array<PR>>(initialPrs);
    const [sortButtonStatus,setSortButtonStatus] = useState<boolean>(true)
    const [sortButtonName,setSortButtonName] = useState<string>("Sort DESC By Date");
    const [searchStatus,setSearchStatus] = useState<boolean>(false);
    const [searchArray,setSearchArray] = useState<Array<PR>>([]);

    const handleSort = () : void =>{
        
        if (sortButtonStatus === true){
            setInitialPrs(prs);
            setSortButtonName("Sort ASC By Date");
            let prsTest = sortBy(prs,'Date','desc');
            setPrs(prsTest);
            setSortButtonStatus(false);
            
        }
        else if (sortButtonStatus === false){
            setInitialPrs(prs);
            setSortButtonName("Sort DESC By Date");
            let prsTest = sortBy(prs,'Date','asc');
            setPrs(prsTest);
            setSortButtonStatus(true);
        }
    }

    const addPR : AddPR = pr =>{
            IdIterator++;
            pr.id = IdIterator;
            setPrs([...prs,pr]);
        }

     const deletePr : DeletePr = selectedPr =>{
         let test = prs.filter(prFilter=>{
             return prFilter !== selectedPr;
         });
         setPrs(test);
     }   

     const handleUpdate : HandleUpdate = selectedPr=>{
         let test : boolean = ! updateProgress;
        setUpdateProgress(test);
        setPrToBeUpdated(selectedPr);
     }

     const handleSearch  = (e: ChangeEvent<HTMLInputElement>)=>{
         if(e.target.value !== ""){
             setSearchStatus(true);
             setSearchArray(
                prs.filter(pr=>{
                    return pr.Comment.toLowerCase().includes(e.target.value.toLowerCase()) ;
                })
             );
         }
         if(e.target.value === ""){
             setSearchStatus(false);
         }
     }

    return (
        <div className="main-prs">
            <Navbar />
            <a href="#down-page-div" ><BiCaretDownCircle className="arrow-div" /></a>
            <div className="sort-search-div" >
            <div><button className="sort-button" type="submit" onClick={handleSort} >{sortButtonName}</button></div>
            <div><br /><label><input  type='text' placeholder="Search By Comment" onChange={handleSearch} /></label></div> 
            </div> 
            {searchStatus === true && <PrItemsList  prs={searchArray} deletePr={deletePr} handleUpdate={handleUpdate}  /> }
            {searchStatus === false && <PrItemsList  prs={prs} deletePr={deletePr} handleUpdate={handleUpdate}  /> }
            <div id="down-page-div">
            { updateProgress === false && <AddPr  addPR={addPR} /> }
            { updateProgress === true && <UpdatePr handleUpdate={handleUpdate}  pr={prToBeUpdated}   /> }
            </div> 
 
        </div>
    )
}