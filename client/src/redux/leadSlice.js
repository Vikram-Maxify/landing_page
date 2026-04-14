import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";

// ✅ API call with axios + credentials
export const submitLead = createAsyncThunk(
  "lead/submitLead",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post(
        "/social-lead/lead",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // ✅ ADD THIS
        }
      );

      return res.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const leadSlice = createSlice({
  name: "lead",
  initialState: {
    loading: false,
    success: false,
    error: null,
    lead: null,
  },
  reducers: {
    resetLeadState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.lead = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitLead.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitLead.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.lead = action.payload?.lead;
      })
      .addCase(submitLead.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { resetLeadState } = leadSlice.actions;
export default leadSlice.reducer;