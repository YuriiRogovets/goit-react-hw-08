import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const BASE_URL = "https://pixabay.com/api";
// const API_KEY = "41900218-778e908913d1efd90b8f97d56";

// async function fetchImages() {
//   // const searchParams = new URLSearchParams({
//   //   key: API_KEY,
//   //   q: query,
//   //   image_type: "photo",
//   //   orientation: "horizontal",
//   //   safesearch: "true",
//   //   per_page: queryParams.pageSize,
//   //   page: queryParams.page,
//   // });

//   //  робимо запит
//   return await axios.get(`${BASE_URL}/?${searchParams}`);
// }

export const getContacts = createAsyncThunk(
  "contacts/fetchAll",

  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", formData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ id, name, number }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, { name, number });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
