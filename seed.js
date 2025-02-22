// seed.js
const mongoose = require('mongoose');
const Role = require('./models/roles.model');
const Permission = require('./models/permissions.model');
const mongoURI = 'mongodb+srv://Chathura:Channa-123@cluster0.ioso5.mongodb.net/pos-system_db?retryWrites=true&w=majority';

async function seedDatabase() {
  try {
    // Connect to your MongoDB database
    await mongoose.connect(mongoURI);

    // Define permissions data
    const permissionsData = [
      { name: 'manage_users' },
      { name: 'configure_settings' },
      { name: 'security_controls' },
      { name: 'process_transaction' },
      { name: 'apply_discount' },
      { name: 'generate_receipts' },
      { name: 'override_permissions' },
      { name: 'process_returns' },
      { name: 'manage_inventory' },
      { name: 'generate_reports' },
      { name: 'access_financial_data' },
      { name: 'review_reports' },
      
    ];

    // Insert permissions into the database
    const insertedPermissions = await Permission.insertMany(permissionsData);

    // Define roles data with associated permission IDs
    const rolesData = [
      { role: 'superAdmin', permissions: insertedPermissions.map(p => p._id) },
      { role: 'admin', permissions: [insertedPermissions[0]._id, insertedPermissions[1]._id, insertedPermissions[2]._id]},
      { role: 'operationsManager', permissions: [insertedPermissions[3]._id, insertedPermissions[4]._id, insertedPermissions[5]._id, insertedPermissions[6]._id, insertedPermissions[7]._id, insertedPermissions[8]._id, insertedPermissions[9]._id, insertedPermissions[10]._id, insertedPermissions[11]._id]},
      { role: 'salesPerson', permissions: [insertedPermissions[3]._id, insertedPermissions[4]._id, insertedPermissions[5]._id]},
      { role: 'manager', permissions: [insertedPermissions[6]._id, insertedPermissions[7]._id, insertedPermissions[8]._id, insertedPermissions[9]._id]},
      { role: 'inventoryManager', permissions: [insertedPermissions[8]._id]},
      { role: 'accountant', permissions: [insertedPermissions[10]._id, insertedPermissions[11]._id]},
      // Add other roles
    ];

    // Insert roles into the database
    await Role.insertMany(rolesData);

    console.log('Database seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
}

// Run the seed function
seedDatabase();
