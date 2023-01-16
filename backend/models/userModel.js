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

// before we save, we want to encrypt the password. So for example, when a new user is added, before saving, it will encrypt the password
// pre, isModified, genSalt and hash are all methods from mongoose
// method only hashes the password if its a new user or user resetting their password (new password)
// .pre means that this will run everytime before saving -- dont need to bring this into our user controller or anything
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User
