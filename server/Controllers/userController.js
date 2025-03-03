// const User = require('../Models/productModel');

// // Controller to get total user count
//  const getTotalUserCount = async (req, res) => {
//   try {
//     const userCount = await User.countDocuments();
//     res.status(200).json({ totalUsers: userCount });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports ={
//     getTotalUserCount
// }


// const User = require("../Models/productModel");

// // Controller to get user count by categories
// const getUserCountByCategory = async (req, res) => {
//   try {
//     const categoryCounts = await User.aggregate([
//       {
//         $group: {
//           _id: "$category",          // Group by the 'category' field
//           totalUsers: { $sum: 1 }    // Count the number of users in each category
//         }
//       }
//     ]);
//     res.status(200).json(categoryCounts);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = {
//   getUserCountByCategory,
// };


// const User = require("../Models/productModel");

// Controller to get user count by multiple fields
// const getUserCounts = async (req, res) => {
//   try {
//     const counts = await User.aggregate([
//       {
//         $facet: {  // $facet runs multiple aggregation pipelines in parallel
//           categoryCount: [
//             { $group: { _id: "$category", totalUsers: { $sum: 1 } } }
//           ],
//           sportsCategoryCount: [
//             { $group: { _id: "$sportsCategory", totalUsers: { $sum: 1 } } }
//           ],
//           brandNameCount: [
//             { $group: { _id: "$brandName", totalUsers: { $sum: 1 } } }
//           ]
//         }
//       }
//     ]);
//     res.status(200).json(counts[0]);  // Returns an object with all counts
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// const User = require("../Models/productModel");

// // Controller to get user count by sports categories (e.g., Cricket, Football)
// const getUserCounts = async (req, res) => {
//   try {
//     const counts = await User.aggregate([

//       {
//                 $group: {
//                   _id: "$category",          // Group by the 'category' field
//                   totalUsers: { $sum: 1 }    // Count the number of users in each category
//                 }
//                },



//       {
//         $facet: {  // $facet runs multiple aggregation pipelines in parallel
//           categoryCount: [
//             { $group: { _id: "$category", totalUsers: { $sum: 1 } } }
//           ],
//           sportsCategoryCount: [
//             { $group: { _id: "$sportscategory", totalUsers: { $sum: 1 } } }
//           ],
//           brandNameCount: [
//             { $group: { _id: "$brandname", totalUsers: { $sum: 1 } } }
//           ]
//         }
//       }
//     ]);
//     res.status(200).json(counts[0]);  // Returns counts for all categories, sports, and brands
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


const User = require("../Models/productModel");

 const getUserCounts = async (req, res) => {
  try {

     // Total number of products
     const totalProducts = await User.countDocuments(); // Count all products

    // Count users by category
    const categoryCount = await User.aggregate([
      { $group: { _id: "$category", totalUsers: { $sum: 1 } } }
    ]);

    // Count users by sports category
    const sportsCategoryCount = await User.aggregate([
      { $group: { _id: "$sportscategory", totalUsers: { $sum: 1 } } }
    ]);

    // Count users by brand name
    const brandNameCount = await User.aggregate([
      { $group: { _id: "$brandname", totalUsers: { $sum: 1 } } }
    ]);

    // Send all counts in a single response
    res.json({
      totalProducts, 
      categoryCount,
      sportsCategoryCount,
      brandNameCount,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};




// Fetch sorted products alphabetically by category, sports category, or brand name
const getSortedProducts = async (req, res) => {
  try {
    const { sortField = 'category', sortOrder = 'asc' } = req.query;

    // Only allow sorting by these fields
    const validFields = ['category', 'sportscategory', 'brandname','name'];
    if (!validFields.includes(sortField)) {
      return res.status(400).json({ message: 'Invalid sorting field.' });
    }

    // Determine sort order: 1 for ascending, -1 for descending
    const order = sortOrder === 'desc' ? -1 : 1;

    // Fetch and sort products alphabetically
    const products = await User.find().sort({ [sortField]: order });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};






module.exports = {
  getUserCounts,
  getSortedProducts
  
};


