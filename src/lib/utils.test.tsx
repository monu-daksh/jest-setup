import axios from "axios";
import { fetchUser, fetchUserAxios, getUniqueValues, sum } from "./utils";

jest.mock("axios");

// describe("group of all test case", ()=>{
//     beforeEach(()=>{
//         global.fetch = jest.fn()
//     })

//     test("should return user data when fetch succeeds", async()=>{

//         const fakeUser = { id: 1, name: "Monu" };

//         (global.fetch as jest.Mock).mockResolvedValue({
//             ok:true,
//             json:()=>Promise.resolve(fakeUser)
//         })

//         const user = await fetchUser("1")

//         expect(user).toEqual(fakeUser)

//         expect(global.fetch).toHaveBeenLastCalledWith(`https://jsonplaceholder.typicode.com/users/1`)
//     })

//     test("should throw error when response not ok",async ()=>{

//         (global.fetch as jest.Mock).mockResolvedValue({
//             ok:false,
//             status:404
//         })

//        await expect(fetchUser("1")).rejects.toThrow("HTTP error! status: 404")

//     })

//     test("should throw error on network failure", async()=>{

//       (global.fetch as jest.Mock).mockRejectedValue(new Error("Network error"))

//       await expect(fetchUser("1")).rejects.toThrow("Network Error")

//     })
//     // ----------------------- Axios ----------------------------------


//     test("should return user data when Axios request succeeds", async()=>{
//          const fakeUser = { id: 1, name: "Monu" };

//         (axios.get as jest.Mock).mockResolvedValue({data:fakeUser})

//         const user = await fetchUserAxios("1")

//         await expect(user).toEqual(fakeUser)

//        await expect(axios.get).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users/1")
//     })

//      test("should throw error when Axios request fails", async () => {
//     // Mock Axios rejection
//     (axios.get as jest.Mock).mockRejectedValue(new Error("Network Error"));

//     await expect(fetchUserAxios("1")).rejects.toThrow("Network Error");
//   });
// })



// describe("write unite test case for all ", ()=>{

//      test("test with positive numbers", ()=>{
//         expect(sum(2, 4)).toBe(6)
//      })

//      test("test with positive and negative numbers", ()=>{
//         expect(sum(6, -2)).toBe(4)
//      })


//      test("both numbers should be numbers", ()=>{
//         expect(()=> sum("e", 2)).toThrow("Both arguments should be numbers")
//      })
// })


// describe("uniqueValues", ()=>{
//     test("should return empty array if input is empty arr", ()=>{
//         expect(getUniqueValues([])).toEqual([])
//     })

//     test("should return only one value if input array has single value", ()=>{
//         expect(getUniqueValues([5])).toEqual([5])
//     })

//     test("should return unique values from sorted array", ()=>{
//         expect(getUniqueValues([1,2, 2,3, 4])).toEqual([1, 2, 3, 5])
//     })

//     test("should handle array with all same values", () => {
//     expect(getUniqueValues([2, 2, 2, 2])).toEqual([2]);
//   });

//   test("should handle negative numbers and duplicates", () => {
//     expect(getUniqueValues([-3, -3, -2, -1, -1, 0])).toEqual([-3, -2, -1, 0]);
//   });

//   test("should handle array with duplicates at start and end", () => {
//     expect(getUniqueValues([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
//   });
// })