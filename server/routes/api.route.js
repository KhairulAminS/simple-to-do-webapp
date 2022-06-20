const router = require('express').Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const cors = require('cors');
router.use(cors());


router.get('/tasks', async (req, res, next) => {
  try {

    const tasks = await prisma.tasks.findMany({})

    res.json(tasks)

  } catch (error) {
    next(error)
  }
});

router.get('/tasks/:id', async (req, res, next) => {
  try {

    const id = parseInt(req.params.id);
    const task = await prisma.tasks.findUnique({
      where: { id: id }
    });

    res.json(task)

  } catch (error) {
    next(error);
  }
});

router.post('/tasks', async (req, res, next) => {
  try {

    const task = await prisma.tasks.create({
      data: req.body
    })

    res.json("Task created!")

  } catch (error) {
    next(error)
  }
});

router.put('/tasks/:id', async (req, res, next) => {
  try {

    const id = parseInt(req.params.id);
    const task = await prisma.tasks.update({
      where:{
        id: id
      },
      data: req.body
    })

    res.json("Task has been updated!")

  } catch (error) {
    next(error)
  }
});

router.delete('/tasks/:id', async (req, res, next) => {
  try {

    const id = parseInt(req.params.id);
    const task = await prisma.tasks.delete({
      where: {
        id: id
      }
    })

    res.json("Task deleted!")

  } catch (error) {
    next(error)
  }
});

module.exports = router;
