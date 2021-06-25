package com.issoft.servlet.dao;

import com.issoft.servlet.entity.Vehicle;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

public class VehicleDAO {

    private List<Vehicle> vehicles;

    private static final VehicleDAO INSTANCE = new VehicleDAO();

    private VehicleDAO() {
        this.vehicles = new ArrayList<>();
        this.vehicles.add(new Vehicle(UUID.randomUUID(), "BMW", "e46", 5000));
        this.vehicles.add(new Vehicle(UUID.randomUUID(), "Mercedes", "cls", 10000));
        this.vehicles.add(new Vehicle(UUID.randomUUID(), "Audi", "a5", 7500));
    }

    public static VehicleDAO getInstance() {
        return INSTANCE;
    }

    public List<Vehicle> findAll() {
     return this.vehicles;
    }

    public Vehicle create(Vehicle vehicle) {
        vehicle.setId(UUID.randomUUID());
        vehicles.add(vehicle);
        return vehicle;
    }

    public Vehicle update(Vehicle vehicle) {
        remove(vehicle.getId());
        vehicles.add(vehicle);
        return vehicle;
    }

    public void remove(UUID id) {
        this.vehicles = vehicles.stream()
                .filter(vehicle -> vehicle.getId().equals(id))
                .collect(Collectors.toList());
    }

}
