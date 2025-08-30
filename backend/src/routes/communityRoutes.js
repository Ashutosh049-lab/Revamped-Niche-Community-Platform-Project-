
const express = require('express');
const router = express.Router();
const communityController = require('../controllers/communityController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.get('/', communityController.getAllCommunities);
router.get('/:id', communityController.getCommunityById);
router.post('/', authenticateToken, communityController.createCommunity);
router.put('/:id', authenticateToken, communityController.updateCommunity);
router.delete('/:id', authenticateToken, communityController.deleteCommunity);

module.exports = router;