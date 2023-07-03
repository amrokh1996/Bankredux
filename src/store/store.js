import { configureStore } from "@reduxjs/toolkit";

const initState = {
  accounts: [
    {
      id: 1,
      customerName: "C.RONALDO alkhazaleh",
      accountNumber: "123456",
      accountType: "Savings",
    },
    {
      id: 2,
      customerName: "kross alkhazaleh",
      accountNumber: "987654",
      accountType: "Student accounts",
    },
    {
      id: 3,
      customerName: "benzema alkhazaleh",
      accountNumber: "987634",
      accountType: "Student accounts",
    },
    {
      id: 4,
      customerName: "isco alkhazaleh",
      accountNumber: "557654",
      accountType: "Student accounts",
    },
  ],
};

const reducer = (state = initState, action) => {
  // You can add more functionality to the reducer if needed
  return state;
};

const store = configureStore({
  reducer: reducer,
});

export default store;
