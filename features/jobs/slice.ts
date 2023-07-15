import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { JobType } from "@/types";

type InitialType = {
  data: JobType[];
  params: {
    page: number;
    description: string;
    location: string;
    full_time: string;
  };
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
};

const initialState = {
  data: [],
  params: {
    page: 1,
    description: "",
    location: "",
    full_time: "false"
  },
  isLoading: false,
  isError: false,
  errorMessage: ""
} as InitialType;

type ParamsType = {
  page: string;
  description?: string;
  location?: string;
  full_time?: string;
};

const url = process.env.NEXT_PUBLIC_API;

export const getAllJobs = createAsyncThunk(
  "jobs/getAllJobs",
  async (params: ParamsType) => {
    let args: ParamsType = {
      page: params.page
    };

    if (params.description) {
      args.description = params.description;
    }

    if (params.location) {
      args.location = params.location;
    }

    if (params.full_time) {
      args.full_time = params.full_time;
    }

    const paramsCreator = new URLSearchParams(args);

    const response = await fetch(
      `${url}/api/recruitment/positions.json?` + paramsCreator
    );
    const data = await response.json();
    return data;
  }
);

export const getAllJobsNext = createAsyncThunk(
  "jobs/getAllJobsNext",
  async (params: ParamsType) => {
    let args: ParamsType = {
      page: params.page
    };

    if (params.description) {
      args.description = params.description;
    }

    if (params.location) {
      args.location = params.location;
    }

    if (params.full_time) {
      args.full_time = params.full_time;
    }

    const paramsCreator = new URLSearchParams(args);

    const response = await fetch(
      `${url}/api/recruitment/positions.json?` + paramsCreator
    );
    const data = await response.json();
    return data;
  }
);

export const jobs = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.params.page = action.payload;
    },
    setDesc: (state, action) => {
      state.params.description = action.payload;
    },
    setLocation: (state, action) => {
      state.params.location = action.payload;
    },
    setFulltime: (state, action) => {
      state.params.full_time = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getAllJobs.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getAllJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getAllJobsNext.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getAllJobsNext.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getAllJobsNext.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = [...state.data, ...action.payload];
      });
  }
});

export const { setPage, setDesc, setLocation, setFulltime } = jobs.actions;
export default jobs.reducer;
