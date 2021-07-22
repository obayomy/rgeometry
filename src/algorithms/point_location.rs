use crate::data::{Point, Polygon};
use crate::PolygonScalar;

pub enum PointLocation {
  ///Point is inside
  Interior,
  ///Point is on the boundary
  Boundary,
  ///Point is outside and at least one ray doesn't intersect the polygon
  FreeExterior,
  ///Point is outside and all possoble rays intersect the polygon
  BlockedExterior,
}

pub fn locate<T>(point: &Point<T, 2>, polygon: &Polygon<T>) -> PointLocation
where
  T: PolygonScalar,
{
  PointLocation::FreeExterior
}
