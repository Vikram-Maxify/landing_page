import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ✅ API call
export const submitLead = createAsyncThunk(
  "lead/submitLead",
  async (data, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://demo1.go-drop.in/api/social-lead/lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        return rejectWithValue(result);
      }

      return result;

    } catch (error) {
      return rejectWithValue(error.message);
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
        state.lead = action.payload.lead;
      })
      .addCase(submitLead.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { resetLeadState } = leadSlice.actions;
export default leadSlice.reducer;