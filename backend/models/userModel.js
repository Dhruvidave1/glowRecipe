import mongoose, { mongo } from 'mongoose'
import bcrypt from 'bcryptjs'
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // dont want more than one person to have the same email address
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
      // because when a user registers, we dont want them to be an admin
    },
  },
  {
    // to automatically keep track of createdat and updated at
    timestamps: true,
  }
)

// added a method to compare if the entered password by the user matches the one in the database
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}
const User = mongoose.model('User', userSchema)

export default User
