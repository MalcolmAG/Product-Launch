from app import db
from sqlalchemy.dialects.postgresql import MONEY, ARRAY, TIMESTAMP
from util.db.MutableList import MutableList

project_industries_map = db.Table(
    'project_industries_map',
    db.Column('industry_id', db.Integer, db.ForeignKey(
        'industry.id'), primary_key=True),
    db.Column('project_id', db.Integer, db.ForeignKey(
        'project.id'), primary_key=True)
)


class Project(db.Model):
    __tablename__ = 'project'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'), nullable=False)
    title = db.Column(db.String(64), index=True, unique=True, nullable=True)
    subtitle = db.Column(db.Text, nullable=True)
    description = db.Column(db.Text, index=True, unique=True, nullable=True)
    # 'Toxi' Configuration
    industry = db.relationship(
        'Industry', secondary=project_industries_map,
        lazy='select', backref=db.backref('Project', lazy='select'))
    location = db.Column(db.String(64), nullable=True)
    photos = db.Column(MutableList.as_mutable(
        ARRAY(db.Text)), default=[], nullable=False)
    funding_goal = db.Column(MONEY, nullable=True)
    current_funding = db.Column(MONEY, nullable=True)
    funds = db.relationship('Fund', backref='project')
    deadline = db.Column(TIMESTAMP, nullable=True)
    stripe_state = db.Column(db.String(128), nullable=True)
    connected_account = db.relationship('ConnectedAccount', backref='project', lazy=True, uselist=False)
    live = db.Column(db.Boolean, default=False, nullable=False)

    def __repr__(self):
        return '{0} created by {1}'.format(self.title, self.User_id)
    
    @property
    def serialize(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'subtitle': self.subtitle,
            'description': self.description,
            'industry': [i.serialize for i in self.industry],
            'location': self.location,
            'photos': self.photos,
            'funding_goal': self.funding_goal,
            'equity': self.equity,
            'current_funding': self.current_funding,
            'deadline': self.deadline,
            'connected_account': True if self.connected_account else False,
            'live': self.live
        }
