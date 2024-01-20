import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "./url";

const allApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${url}` }),
  refetchOnMountOrArgChange: true,
  tagTypes: ["User"], //refresh when it innvalidates
  endpoints(build) {
    return {
      createUser: build.mutation({
        query: (createJobcardData) => {
          return {
            url: `/app/register/`,
            method: "POST",
            body: createJobcardData,
            headers: {
              Accept: "application/json",
              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [{ type: "User", id: arg.id }],
      }),
    };
  },
});

export const { useCreateUserMutation } = allApi;

export { allApi };
