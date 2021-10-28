import React , {useState , useEffect} from 'react';
import './MainPackage.css'
import MainPackageDetails from './MainPackageDetails';
import loader from '../../../image/flight-loader.gif'

const MainPackage = () => {
    const [tourPackage, setTourPackage] = useState([])
    const [spinner, setSpinner] = useState(false);
    useEffect(() => {

        fetch('https://afternoon-lake-94187.herokuapp.com/showPackage')
            .then(res => res.json())
            .then(data => {
                const tourData = data.slice(0,9)
                setTourPackage(tourData)
                setSpinner(true)
            })

    }, [])
    return (
        <section className="mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading my-5 text-center">
                            <h4 className="support-color2 mb-4">Choose your best Package</h4>
                            <h1 className="mb-3">Select Your Best Package <br /> For Your Travel</h1>
                        </div>
                    </div>
                  <div className="row">
                      {spinner?<> {
                        tourPackage.map( info =>  <MainPackageDetails info={info} key={info._id} />)
                    } </>
                    :<>
                    <div className='spinner-box text-center '>
                        <img src={loader} alt="" className="" />
                    </div>
                    </>}
                 
                  </div>
                </div>
            </div>
        </section>



// const handleDeleteService = id => {
//     if (restrictPermission(id)) {
//         return swal("Permission restriction!", "As a test-admin, you don't have permission to delete 6 core services. But you can delete your added services.", "info");
//     }

//     swal({
//         title: "Are you sure?",
//         text: "Are you sure you want to delete this service?",
//         icon: "warning",
//         buttons: [true, "Yes"],
//         dangerMode: true,
//     }).then(wantDelete => {
//         if (wantDelete) {
//             const loading = toast.loading('Deleting...Please wait!');
//             const removedServices = services.filter(item => item._id !== id);
//             axios.delete(`https://gerez-server.herokuapp.com/delete/${id}`)
//                 .then(res => {
//                     toast.dismiss(loading);
//                     if (res.data) {
//                         setServices(removedServices)
//                         return swal("Successfully Deleted!", "Your service has been successfully deleted.", "success");
//                     }
//                     swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
//                 })
//                 .catch(err => {
//                     toast.dismiss(loading);
//                     swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true })
//                 })
//         }
//     });
// }









    );
};

export default MainPackage;