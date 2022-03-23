import React from 'react'
import "./Form.css"
import { Link, Navigate } from 'react-router-dom'
import Context from "../Context"
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const axios = require('axios');

export default function Form() {

    const { state, setState } = React.useContext(Context)


    const [from, setFrom] = React.useState("")
    const [to, setTo] = React.useState("")
    const [date, setDate] = React.useState("")
    const [seats, setSeats] = React.useState("")

  const [redirect,setRedirect]= React.useState(false)


    const check = async() => {
        try{
            if(from === "" || to === "" || date === "" || seats === ""){
                toast.error("Empty field")
                return
            }
            if(seats < 1 || seats > 5){
                toast.error( "Invalid number of seats")
                return
            }
            if(!(/^\d{4}-\d{2}-\d{2}$/.test(date))){
                toast.error( "Invalid date")
                return
            }
            
            const data = {
                from: from,
                to: to,
                date: date,
                seatsLeft: seats
            }

           const response = await axios.post('http://localhost:3000/offers/getSome', data)

           if(response.status === 200){
                toast.success("successfully received response")
                setState({...state, getSome:response.data})
                setRedirect(true)
                return
           }
        } catch(err){
            toast.error("Sorry no such offers Avalilable")
        }
    }

    return (
        <>
        <ToastContainer />
    {redirect && <Navigate to="/Offers"/>}
        <div id='search-form'>
            <h2 className='h2'>Have a safe journey !!!</h2>
            <form onSubmit={(e)=>{
                e.preventDefault()
                check()
            }} className='mt-5 mx-auto form'>

                    <div className='hms'>
                        <div> <i className="fa fa-circle-o" aria-hidden="true"></i> </div>
                        <input onChange={(e)=>{
                            setFrom(e.target.value)
                        }} type='text' placeholder='From..' list="cities" name="from-value" required/>
                        <datalist id="cities">
                            <option value="Adilabad" />
                            <option value="Ahmedabad" />
                            <option value="Aizawl" />
                            <option value="Ajmer" />
                            <option value="Alappuzha" />
                            <option value="Alirajpur" />
                            <option value="Almora" />
                            <option value="Ambala" />
                            <option value="Amravati" />
                            <option value="Amritsar" />
                            <option value="Anantapur" />
                            <option value="Angul" />
                            <option value="Anuppur" />
                            <option value="Ariyalur" />
                            <option value="AshokNagar" />
                            <option value="Aurangabad" />
                            <option value="Azamgarh" />
                            <option value="Bagalkot" />
                            <option value="Bagpat" />
                            <option value="Baksa" />
                            <option value="Balangir" />
                            <option value="Ballia" />
                            <option value="Banaskantha" />
                            <option value="Bandipora" />
                            <option value="BangaloreUrban" />
                            <option value="Bankura" />
                            <option value="Barabanki" />
                            <option value="Baran" />
                            <option value="Bareilly" />
                            <option value="Barmer" />
                            <option value="Barpeta" />
                            <option value="Bastar" />
                            <option value="Bathinda" />
                            <option value="Begusarai" />
                            <option value="Bellary" />
                            <option value="Bhadrak" />
                            <option value="Bhandara" />
                            <option value="Bharuch" />
                            <option value="Bhilwara" />
                            <option value="Bhiwani" />
                            <option value="Bhopal" />
                            <option value="Bijapur" />
                            <option value="Bijnor" />
                            <option value="Bilaspur" />
                            <option value="Birbhum" />
                            <option value="Bokaro" />
                            <option value="Boudh(Bauda)" />
                            <option value="Bulandshahr" />
                            <option value="Bundi" />
                            <option value="Buxar" />
                            <option value="CentralDelhi" />
                            <option value="Chamba" />
                            <option value="Champawat" />
                            <option value="Chandauli" />
                            <option value="Chandigarh" />
                            <option value="Changlang" />
                            <option value="Chennai" />
                            <option value="ChhatrapatiShahujiMaharajNagar" />
                            <option value="Chikkaballapur" />
                            <option value="Chirang" />
                            <option value="Chitrakoot" />
                            <option value="Chittorgarh" />
                            <option value="Churu" />
                            <option value="CoochBehar" />
                            <option value="Cuttack" />
                            <option value="Dahod" />
                            <option value="DakshinaKannada" />
                            <option value="Damoh" />
                            <option value="Darbhanga" />
                            <option value="Darrang" />
                            <option value="Dausa" />
                            <option value="Debagarh(Deogarh)" />
                            <option value="Deoghar" />
                            <option value="Dewas" />
                            <option value="Dhamtari" />
                            <option value="Dhar" />
                            <option value="Dharwad" />
                            <option value="Dhenkanal" />
                            <option value="Dhubri" />
                            <option value="DibangValley" />
                            <option value="DimaHasao" />
                            <option value="Dindigul" />
                            <option value="Diu" />
                            <option value="Dumka" />
                            <option value="Durg" />
                            <option value="EastDelhi" />
                            <option value="EastKhasiHills" />
                            <option value="EastSikkim" />
                            <option value="Eluru" />
                            <option value="Erode" />
                            <option value="Etawah" />
                            <option value="Faridabad" />
                            <option value="Farrukhabad" />
                            <option value="FatehgarhSahib" />
                            <option value="Fazilka" />
                            <option value="Firozpur" />
                            <option value="Gadchiroli" />
                            <option value="Ganderbal" />
                            <option value="Ganganagar" />
                            <option value="Garhwa" />
                            <option value="Gaya" />
                            <option value="Ghazipur" />
                            <option value="Goalpara" />
                            <option value="Golaghat" />
                            <option value="Gondia" />
                            <option value="Gorakhpur" />
                            <option value="Gumla" />
                            <option value="Guntur" />
                            <option value="Gurgaon" />
                            <option value="Hailakandi" />
                            <option value="Hamirpur" />
                            <option value="Harda" />
                            <option value="Haridwar" />
                            <option value="Haveridistrict" />
                            <option value="Hingoli" />
                            <option value="Hooghly" />
                            <option value="Hoshiarpur" />
                            <option value="Hyderabad" />
                            <option value="Idukki" />
                            <option value="ImphalWest" />
                            <option value="Jabalpur" />
                            <option value="JaintiaHills" />
                            <option value="Jaisalmer" />
                            <option value="Jalandhar" />
                            <option value="Jalgaon" />
                            <option value="Jalore" />
                            <option value="Jammu" />
                            <option value="Jamtara" />
                            <option value="Janjgir-Champa" />
                            <option value="Jaunpurdistrict" />
                            <option value="Jhabua" />
                            <option value="Jhalawar" />
                            <option value="Jharsuguda" />
                            <option value="Jind" />
                            <option value="Jorhat" />
                            <option value="JyotibaPhuleNagar" />
                            <option value="Kadapa" />
                            <option value="Kaithal" />
                            <option value="Kalahandi" />
                            <option value="KamrupMetropolitan" />
                            <option value="Kandhamal" />
                            <option value="Kanker" />
                            <option value="Kannur" />
                            <option value="KanshiRamNagar" />
                            <option value="Kapurthala" />
                            <option value="Karauli" />
                            <option value="Kargil" />
                            <option value="Karimnagar" />
                            <option value="Karur" />
                            <option value="Kathua" />
                            <option value="Katni" />
                            <option value="Kendrapara" />
                            <option value="Khagaria" />
                            <option value="Khandwa(EastNimar)" />
                            <option value="Kheda" />
                            <option value="Khowai" />
                            <option value="Kinnaur" />
                            <option value="Kishtwar" />
                            <option value="Koderma" />
                            <option value="Kokrajhar" />
                            <option value="Kolasib" />
                            <option value="Kolkata" />
                            <option value="Koppal" />
                            <option value="Korba" />
                            <option value="Kota" />
                            <option value="Kozhikode" />
                            <option value="Kulgam" />
                            <option value="Kupwara" />
                            <option value="Kurukshetra" />
                            <option value="Kushinagar" />
                            <option value="LahaulandSpiti" />
                            <option value="LakhimpurKheri" />
                            <option value="Lalitpur" />
                            <option value="Latur" />
                            <option value="Leh" />
                            <option value="Lohit" />
                            <option value="LowerSubansiri" />
                            <option value="Ludhiana" />
                            <option value="Madhepura" />
                            <option value="Madurai" />
                            <option value="Maharajganj" />
                            <option value="Mahbubnagar" />
                            <option value="Mahendragarh" />
                            <option value="Mainpuri" />
                            <option value="Maldah" />
                            <option value="Mamit" />
                            <option value="Mandla" />
                            <option value="Mandya" />
                            <option value="Marigaon" />
                            <option value="Mau" />
                            <option value="Medak" />
                            <option value="Mehsana" />
                            <option value="Mirzapur" />
                            <option value="Mokokchung" />
                            <option value="Moradabad" />
                            <option value="MumbaiCity" />
                            <option value="Munger" />
                            <option value="Muzaffarnagar" />
                            <option value="Mysore" />
                            <option value="Nadia" />
                            <option value="Nagapattinam" />
                            <option value="Nagpur" />
                            <option value="Nalanda" />
                            <option value="Nalgonda" />
                            <option value="Nanded" />
                            <option value="Narayanpur" />
                            <option value="Narsinghpur" />
                            <option value="Navsari" />
                            <option value="Nawanshahr" />
                            <option value="Neemuch" />
                            <option value="NewDelhi" />
                            <option value="Nizamabad" />
                            <option value="NorthDelhi" />
                            <option value="NorthGoa" />
                            <option value="NorthTripura" />
                            <option value="Nuapada" />
                            <option value="Osmanabad" />
                            <option value="Palakkad" />
                            <option value="Pali" />
                            <option value="Panchkula" />
                            <option value="PanchsheelNagardistrict(Hapur)" />
                            <option value="Panna" />
                            <option value="Parbhani" />
                            <option value="Patan" />
                            <option value="Pathankot" />
                            <option value="Patna" />
                            <option value="Perambalur" />
                            <option value="Pilibhit" />
                            <option value="Pondicherry" />
                            <option value="Porbandar" />
                            <option value="Pratapgarh" />
                            <option value="Pulwama" />
                            <option value="PurbaMedinipur" />
                            <option value="Purnia" />
                            <option value="Raebareli" />
                            <option value="Raigad" />
                            <option value="Raipur" />
                            <option value="Rajauri" />
                            <option value="Rajkot" />
                            <option value="Rajsamand" />
                            <option value="Ramanagara" />
                            <option value="Ramban" />
                            <option value="Rampur" />
                            <option value="Ratlam" />
                            <option value="Rayagada" />
                            <option value="Rewa" />
                            <option value="RiBhoi" />
                            <option value="Rohtas" />
                            <option value="Rupnagar" />
                            <option value="Sagar" />
                            <option value="Saharsa" />
                            <option value="Saiha" />
                            <option value="Samastipur" />
                            <option value="Sambalpur" />
                            <option value="Sangrur" />
                            <option value="SantRavidasNagar" />
                            <option value="Satara" />
                            <option value="SawaiMadhopur" />
                            <option value="Senapati" />
                            <option value="SeraikelaKharsawan" />
                            <option value="Shahdol" />
                            <option value="Shajapur" />
                            <option value="Sheikhpura" />
                            <option value="Sheopur" />
                            <option value="Shimoga" />
                            <option value="Shopian" />
                            <option value="Sibsagar" />
                            <option value="Sidhi" />
                            <option value="Simdega" />
                            <option value="Singrauli" />
                            <option value="Sirohi" />
                            <option value="Sitamarhi" />
                            <option value="Sivaganga" />
                            <option value="Solan" />
                            <option value="Sonbhadra" />
                            <option value="Sonitpur" />
                            <option value="SouthDelhi" />
                            <option value="SouthGoa" />
                            <option value="SouthTripura" />
                            <option value="SriMuktsarSahib" />
                            <option value="Srinagar" />
                            <option value="Sultanpur" />
                            <option value="Supaul" />
                            <option value="Surendranagar" />
                            <option value="Tamenglong" />
                            <option value="Tawang" />
                            <option value="Thane" />
                            <option value="TheDangs" />
                            <option value="Thiruvananthapuram" />
                            <option value="Thoubal" />
                            <option value="Tikamgarh" />
                            <option value="Tirap" />
                            <option value="Tirunelveli" />
                            <option value="Tiruvallur" />
                            <option value="Tiruvarur" />
                            <option value="Tuensang" />
                            <option value="Udaipur" />
                            <option value="UdhamSinghNagar" />
                            <option value="Udupi" />
                            <option value="Ukhrul" />
                            <option value="Una" />
                            <option value="UpperSiang" />
                            <option value="UttarDinajpur" />
                            <option value="Uttarkashi" />
                            <option value="Vaishali" />
                            <option value="Varanasi" />
                            <option value="Vidisha" />
                            <option value="Virudhunagar" />
                            <option value="Vizianagaram" />
                            <option value="Warangal" />
                            <option value="Washim" />
                            <option value="WestChamparan" />
                            <option value="WestGaroHills" />
                            <option value="WestKhasiHills" />
                            <option value="WestSikkim" />
                            <option value="WestTripura" />
                            <option value="Yadgir" />
                            <option value="Yanam" />
                            <option value="Zunheboto" />

                        </datalist>
                    </div>


                    <div className='hms'>
                        <div> <i className="fa fa-circle-o" aria-hidden="true"></i>  </div>
                        <input onChange={(e)=>{
                            setTo(e.target.value)
                        }} placeholder='Where to go..' list="cities" name="to-value" required/>
                        <datalist id="cities">
                            <option value="Adilabad" />
                            <option value="Ahmedabad" />
                            <option value="Aizawl" />
                            <option value="Ajmer" />
                            <option value="Alappuzha" />
                            <option value="Alirajpur" />
                            <option value="Almora" />
                            <option value="Ambala" />
                            <option value="Amravati" />
                            <option value="Amritsar" />
                            <option value="Anantapur" />
                            <option value="Angul" />
                            <option value="Anuppur" />
                            <option value="Ariyalur" />
                            <option value="AshokNagar" />
                            <option value="Aurangabad" />
                            <option value="Azamgarh" />
                            <option value="Bagalkot" />
                            <option value="Bagpat" />
                            <option value="Baksa" />
                            <option value="Balangir" />
                            <option value="Ballia" />
                            <option value="Banaskantha" />
                            <option value="Bandipora" />
                            <option value="BangaloreUrban" />
                            <option value="Bankura" />
                            <option value="Barabanki" />
                            <option value="Baran" />
                            <option value="Bareilly" />
                            <option value="Barmer" />
                            <option value="Barpeta" />
                            <option value="Bastar" />
                            <option value="Bathinda" />
                            <option value="Begusarai" />
                            <option value="Bellary" />
                            <option value="Bhadrak" />
                            <option value="Bhandara" />
                            <option value="Bharuch" />
                            <option value="Bhilwara" />
                            <option value="Bhiwani" />
                            <option value="Bhopal" />
                            <option value="Bijapur" />
                            <option value="Bijnor" />
                            <option value="Bilaspur" />
                            <option value="Birbhum" />
                            <option value="Bokaro" />
                            <option value="Boudh(Bauda)" />
                            <option value="Bulandshahr" />
                            <option value="Bundi" />
                            <option value="Buxar" />
                            <option value="CentralDelhi" />
                            <option value="Chamba" />
                            <option value="Champawat" />
                            <option value="Chandauli" />
                            <option value="Chandigarh" />
                            <option value="Changlang" />
                            <option value="Chennai" />
                            <option value="ChhatrapatiShahujiMaharajNagar" />
                            <option value="Chikkaballapur" />
                            <option value="Chirang" />
                            <option value="Chitrakoot" />
                            <option value="Chittorgarh" />
                            <option value="Churu" />
                            <option value="CoochBehar" />
                            <option value="Cuttack" />
                            <option value="Dahod" />
                            <option value="DakshinaKannada" />
                            <option value="Damoh" />
                            <option value="Darbhanga" />
                            <option value="Darrang" />
                            <option value="Dausa" />
                            <option value="Debagarh(Deogarh)" />
                            <option value="Deoghar" />
                            <option value="Dewas" />
                            <option value="Dhamtari" />
                            <option value="Dhar" />
                            <option value="Dharwad" />
                            <option value="Dhenkanal" />
                            <option value="Dhubri" />
                            <option value="DibangValley" />
                            <option value="DimaHasao" />
                            <option value="Dindigul" />
                            <option value="Diu" />
                            <option value="Dumka" />
                            <option value="Durg" />
                            <option value="EastDelhi" />
                            <option value="EastKhasiHills" />
                            <option value="EastSikkim" />
                            <option value="Eluru" />
                            <option value="Erode" />
                            <option value="Etawah" />
                            <option value="Faridabad" />
                            <option value="Farrukhabad" />
                            <option value="FatehgarhSahib" />
                            <option value="Fazilka" />
                            <option value="Firozpur" />
                            <option value="Gadchiroli" />
                            <option value="Ganderbal" />
                            <option value="Ganganagar" />
                            <option value="Garhwa" />
                            <option value="Gaya" />
                            <option value="Ghazipur" />
                            <option value="Goalpara" />
                            <option value="Golaghat" />
                            <option value="Gondia" />
                            <option value="Gorakhpur" />
                            <option value="Gumla" />
                            <option value="Guntur" />
                            <option value="Gurgaon" />
                            <option value="Hailakandi" />
                            <option value="Hamirpur" />
                            <option value="Harda" />
                            <option value="Haridwar" />
                            <option value="Haveridistrict" />
                            <option value="Hingoli" />
                            <option value="Hooghly" />
                            <option value="Hoshiarpur" />
                            <option value="Hyderabad" />
                            <option value="Idukki" />
                            <option value="ImphalWest" />
                            <option value="Jabalpur" />
                            <option value="JaintiaHills" />
                            <option value="Jaisalmer" />
                            <option value="Jalandhar" />
                            <option value="Jalgaon" />
                            <option value="Jalore" />
                            <option value="Jammu" />
                            <option value="Jamtara" />
                            <option value="Janjgir-Champa" />
                            <option value="Jaunpurdistrict" />
                            <option value="Jhabua" />
                            <option value="Jhalawar" />
                            <option value="Jharsuguda" />
                            <option value="Jind" />
                            <option value="Jorhat" />
                            <option value="JyotibaPhuleNagar" />
                            <option value="Kadapa" />
                            <option value="Kaithal" />
                            <option value="Kalahandi" />
                            <option value="KamrupMetropolitan" />
                            <option value="Kandhamal" />
                            <option value="Kanker" />
                            <option value="Kannur" />
                            <option value="KanshiRamNagar" />
                            <option value="Kapurthala" />
                            <option value="Karauli" />
                            <option value="Kargil" />
                            <option value="Karimnagar" />
                            <option value="Karur" />
                            <option value="Kathua" />
                            <option value="Katni" />
                            <option value="Kendrapara" />
                            <option value="Khagaria" />
                            <option value="Khandwa(EastNimar)" />
                            <option value="Kheda" />
                            <option value="Khowai" />
                            <option value="Kinnaur" />
                            <option value="Kishtwar" />
                            <option value="Koderma" />
                            <option value="Kokrajhar" />
                            <option value="Kolasib" />
                            <option value="Kolkata" />
                            <option value="Koppal" />
                            <option value="Korba" />
                            <option value="Kota" />
                            <option value="Kozhikode" />
                            <option value="Kulgam" />
                            <option value="Kupwara" />
                            <option value="Kurukshetra" />
                            <option value="Kushinagar" />
                            <option value="LahaulandSpiti" />
                            <option value="LakhimpurKheri" />
                            <option value="Lalitpur" />
                            <option value="Latur" />
                            <option value="Leh" />
                            <option value="Lohit" />
                            <option value="LowerSubansiri" />
                            <option value="Ludhiana" />
                            <option value="Madhepura" />
                            <option value="Madurai" />
                            <option value="Maharajganj" />
                            <option value="Mahbubnagar" />
                            <option value="Mahendragarh" />
                            <option value="Mainpuri" />
                            <option value="Maldah" />
                            <option value="Mamit" />
                            <option value="Mandla" />
                            <option value="Mandya" />
                            <option value="Marigaon" />
                            <option value="Mau" />
                            <option value="Medak" />
                            <option value="Mehsana" />
                            <option value="Mirzapur" />
                            <option value="Mokokchung" />
                            <option value="Moradabad" />
                            <option value="MumbaiCity" />
                            <option value="Munger" />
                            <option value="Muzaffarnagar" />
                            <option value="Mysore" />
                            <option value="Nadia" />
                            <option value="Nagapattinam" />
                            <option value="Nagpur" />
                            <option value="Nalanda" />
                            <option value="Nalgonda" />
                            <option value="Nanded" />
                            <option value="Narayanpur" />
                            <option value="Narsinghpur" />
                            <option value="Navsari" />
                            <option value="Nawanshahr" />
                            <option value="Neemuch" />
                            <option value="NewDelhi" />
                            <option value="Nizamabad" />
                            <option value="NorthDelhi" />
                            <option value="NorthGoa" />
                            <option value="NorthTripura" />
                            <option value="Nuapada" />
                            <option value="Osmanabad" />
                            <option value="Palakkad" />
                            <option value="Pali" />
                            <option value="Panchkula" />
                            <option value="PanchsheelNagardistrict(Hapur)" />
                            <option value="Panna" />
                            <option value="Parbhani" />
                            <option value="Patan" />
                            <option value="Pathankot" />
                            <option value="Patna" />
                            <option value="Perambalur" />
                            <option value="Pilibhit" />
                            <option value="Pondicherry" />
                            <option value="Porbandar" />
                            <option value="Pratapgarh" />
                            <option value="Pulwama" />
                            <option value="PurbaMedinipur" />
                            <option value="Purnia" />
                            <option value="Raebareli" />
                            <option value="Raigad" />
                            <option value="Raipur" />
                            <option value="Rajauri" />
                            <option value="Rajkot" />
                            <option value="Rajsamand" />
                            <option value="Ramanagara" />
                            <option value="Ramban" />
                            <option value="Rampur" />
                            <option value="Ratlam" />
                            <option value="Rayagada" />
                            <option value="Rewa" />
                            <option value="RiBhoi" />
                            <option value="Rohtas" />
                            <option value="Rupnagar" />
                            <option value="Sagar" />
                            <option value="Saharsa" />
                            <option value="Saiha" />
                            <option value="Samastipur" />
                            <option value="Sambalpur" />
                            <option value="Sangrur" />
                            <option value="SantRavidasNagar" />
                            <option value="Satara" />
                            <option value="SawaiMadhopur" />
                            <option value="Senapati" />
                            <option value="SeraikelaKharsawan" />
                            <option value="Shahdol" />
                            <option value="Shajapur" />
                            <option value="Sheikhpura" />
                            <option value="Sheopur" />
                            <option value="Shimoga" />
                            <option value="Shopian" />
                            <option value="Sibsagar" />
                            <option value="Sidhi" />
                            <option value="Simdega" />
                            <option value="Singrauli" />
                            <option value="Sirohi" />
                            <option value="Sitamarhi" />
                            <option value="Sivaganga" />
                            <option value="Solan" />
                            <option value="Sonbhadra" />
                            <option value="Sonitpur" />
                            <option value="SouthDelhi" />
                            <option value="SouthGoa" />
                            <option value="SouthTripura" />
                            <option value="SriMuktsarSahib" />
                            <option value="Srinagar" />
                            <option value="Sultanpur" />
                            <option value="Supaul" />
                            <option value="Surendranagar" />
                            <option value="Tamenglong" />
                            <option value="Tawang" />
                            <option value="Thane" />
                            <option value="TheDangs" />
                            <option value="Thiruvananthapuram" />
                            <option value="Thoubal" />
                            <option value="Tikamgarh" />
                            <option value="Tirap" />
                            <option value="Tirunelveli" />
                            <option value="Tiruvallur" />
                            <option value="Tiruvarur" />
                            <option value="Tuensang" />
                            <option value="Udaipur" />
                            <option value="UdhamSinghNagar" />
                            <option value="Udupi" />
                            <option value="Ukhrul" />
                            <option value="Una" />
                            <option value="UpperSiang" />
                            <option value="UttarDinajpur" />
                            <option value="Uttarkashi" />
                            <option value="Vaishali" />
                            <option value="Varanasi" />
                            <option value="Vidisha" />
                            <option value="Virudhunagar" />
                            <option value="Vizianagaram" />
                            <option value="Warangal" />
                            <option value="Washim" />
                            <option value="WestChamparan" />
                            <option value="WestGaroHills" />
                            <option value="WestKhasiHills" />
                            <option value="WestSikkim" />
                            <option value="WestTripura" />
                            <option value="Yadgir" />
                            <option value="Yanam" />
                            <option value="Zunheboto" />

                        </datalist>
                    </div>

                    <div className='hms'>
                        <div > <i className="fa fa-calendar" aria-hidden="true"></i></div>
                        <input onChange={(e)=>{
                            setDate(e.target.value)
                        }} type="date" required />
                    </div>

                    <div className='hms'>
                        <div> <i className="fa fa-user" aria-hidden="true"></i></div>
                        <input onChange={(e)=>{
                            setSeats(e.target.value)
                        }} placeholder='1' list='customers' maxLength="2" size='2' required/>
                        <datalist id='customers'>
                            <option value='1'/>
                            <option value='2'/>
                            <option value='3'/>
                            <option value='4'/>
                        </datalist>
                    </div>

                    <div className='button search-button'>
                        <button type="submit" className="btn btn-block btn-primary form-search-button">search</button>
                    </div>
            </form>
        </div>
        </>
    ) 
}
