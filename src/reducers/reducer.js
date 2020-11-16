
const initialState = {
    loginCredential: {
        username:'',
        password:''
    },
    users:[
        {
            id:5,
            name:"test5",
            age : "15",
            gender:"male",
            email : "test5@gmail.com",
            phoneNo : "9415346317"
        },
        {
            id : 2,
            name:"test2",
            age : "12",
            gender:"male",
            email : "test2@gmail.com",
            phoneNo : "9415346314"
            },
            {
            id:3,
            name:"test3",
            age : "13",
            gender:"male",
            email : "test3@gmail.com",
            phoneNo : "9415346315"
            },
            {
            id:4,
            name:"test4",
            age : "14",
            gender:"male",
            email : "test4@gmail.com",
            phoneNo : "9415346316"
            },
            {
            id:5,
            name:"test5",
            age : "15",
            gender:"male",
            email : "test5@gmail.com",
            phoneNo : "9415346317"
            },
            {
            id:6,
            name:"test6",
            age : "16",
            gender:"male",
            email : "test6@gmail.com",
            phoneNo : "9415346318"
            }
    ]
}

const reducer = (state=initialState, action) => {

    console.log(action);
    let actionType = action.type;
    let param = action.param;

    switch(actionType){
        case 'LOGIN':
            return {

            }
            break;

        case 'ADD_EMPLOYEE':
            return {

            }
            break;

        case 'UPDATE_EMPLOYEE':


            let emplList = [...state.users];

            emplList[param.rowId] = {
                id:param.id,
                name:param.name,
                age : param.age,
                gender:param.gender,
                email : param.email,
                phoneNo : param.phoneNo
            }

            console.log(emplList);

            return {
                ...state,
                users:emplList
            }
            break;

        case 'GET_EMPLOYEE':

            break;
            
        default:
            return state;
            break;
    }

    return state;
}


export default reducer;