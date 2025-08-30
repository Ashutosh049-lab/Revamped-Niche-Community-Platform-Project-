

// const Community = require('../models/Community');

// exports.getAllCommunities = async (req, res) => {
//   try {
//     const communities = await Community.findAll();
//     res.json(communities);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getCommunityById = async (req, res) => {
//   try {
//     const community = await Community.findByPk(req.params.id);
//     if (!community) return res.status(404).json({ message: 'Community not found' });
//     res.json(community);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.createCommunity = async (req, res) => {
//   try {
//     const community = await Community.create(req.body);
//     res.status(201).json(community);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.updateCommunity = async (req, res) => {
//   try {
//     const community = await Community.findByPk(req.params.id);
//     if (!community) return res.status(404).json({ message: 'Community not found' });
    
//     await community.update(req.body);
//     res.json(community);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.deleteCommunity = async (req, res) => {
//   try {
//     const community = await Community.findByPk(req.params.id);
//     if (!community) return res.status(404).json({ message: 'Community not found' });
    
//     await community.destroy();
//     res.json({ message: 'Community deleted' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



// Add admin management methods
exports.addModerator = async (req, res) => {
  try {
    const community = await Community.findByPk(req.params.id);
    if (!community) return res.status(404).json({ message: 'Community not found' });
    
    // Check if user is admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    await community.addModerator(req.body.userId);
    res.json({ message: 'Moderator added successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.removeModerator = async (req, res) => {
  try {
    const community = await Community.findByPk(req.params.id);
    if (!community) return res.status(404).json({ message: 'Community not found' });
    
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    await community.removeModerator(req.body.userId);
    res.json({ message: 'Moderator removed successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.moderatePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    
    if (req.user.role !== 'moderator' && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    await post.update({ moderated: true });
    res.json({ message: 'Post moderated successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};